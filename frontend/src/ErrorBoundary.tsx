import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMsg: string;
  errorStack: string;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMsg: "",
    errorStack: ""
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMsg: error.message, errorStack: error.stack || "" };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", color: "#f87171", backgroundColor: "#020617", minHeight: "100vh", fontFamily: "monospace" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "10px", color: "white" }}>React Fatal Runtime Crash</h2>
          <p style={{ fontSize: "16px", marginBottom: "20px" }}><strong>{this.state.errorMsg}</strong></p>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: "12px", color: "#fbbf24", backgroundColor: "#1e293b", padding: "15px", borderRadius: "8px" }}>
            {this.state.errorStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
