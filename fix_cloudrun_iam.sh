#!/usr/bin/env bash
set -e

echo "Fixing IAM Policy for ayush-bioai-demo Cloud Run service..."

# You might need to authenticate first if not already authenticated
# gcloud auth login

PROJECT_ID=$(gcloud config get-value project)
REGION="asia-south1"
SERVICE_NAME="ayush-bioai-demo"

echo "Project: $PROJECT_ID"
echo "Region: $REGION"
echo "Service: $SERVICE_NAME"

echo "Attempting to grant roles/run.invoker to allUsers..."
gcloud run services add-iam-policy-binding $SERVICE_NAME \
  --region=$REGION \
  --member="allUsers" \
  --role="roles/run.invoker" \
  --project=$PROJECT_ID

echo "IAM policy updated."
echo "If this command fails with an organization policy error, it means Domain Restricted Sharing is enabled on your GCP organization, and you'll need to disable it or manually allow the user."
