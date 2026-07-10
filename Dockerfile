# ============================================================
# AYUSH Bio-AI Evidence Demo — Cloud Run Dockerfile
# Single container serving Python Gradio Dashboard UI
# ============================================================

FROM python:3.11-slim AS runtime

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend modules and dashboard UI code
COPY api/ ./api/
COPY backend/ ./backend/
COPY dashboard/ ./dashboard/

# Copy data, configs, outputs, assets, scripts
COPY data/ ./data/
COPY configs/ ./configs/
COPY outputs/ ./outputs/
COPY assets/ ./assets/
COPY scripts/ ./scripts/

# Set environment variables
ENV PORT=8080
ENV PYTHONPATH=/app
ENV PYTHONUNBUFFERED=1

# Expose the Cloud Run port
EXPOSE 8080

# Health check - queries the Gradio home page
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/ || exit 1

# Start the Gradio dashboard on Cloud Run's expected port
CMD ["python", "dashboard/main.py"]
