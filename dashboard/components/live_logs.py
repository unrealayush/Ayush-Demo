import os
import sys
import time
import subprocess
from typing import Generator, List, Optional

def stream_subprocess_command(cmd: List[str], cwd: Optional[str] = None) -> Generator[str, None, int]:
    """
    Executes a subprocess command and streams its stdout/stderr line-by-line in real-time.
    Includes timestamps and enforces line-buffering.
    """
    timestamp_format = "%H:%M:%S"
    
    # Use python executable on the workstation or specified virtual env
    if cmd[0] == "python" or cmd[0] == "python3":
        cmd[0] = sys.executable

    print(f"[LiveLogs] Spawning Popen for: {' '.join(cmd)}")
    
    # Spawn subprocess with redirected stdout and stderr merged
    process = subprocess.Popen(
        cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        bufsize=1,  # Line-buffered
        cwd=cwd,
        universal_newlines=True
    )

    # Read output stream line-by-line live
    while True:
        line = process.stdout.readline()
        if not line and process.poll() is not None:
            break
        if line:
            timestamp = time.strftime(f"[{timestamp_format}]")
            yield f"{timestamp} {line.strip()}"

    returncode = process.poll() or 0
    if returncode != 0:
        yield f"[{time.strftime(timestamp_format)}] [ERROR] Subprocess exited with code {returncode}"
        
    return returncode
