import gradio as gr
from .evidence_passport import create_evidence_passport_panel

def create_passport_panel():
    """
    Returns the dynamic collapsible Accordion panels representing the fully structured Evidence Passport.
    """
    return create_evidence_passport_panel()
