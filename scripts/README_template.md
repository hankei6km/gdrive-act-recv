# Google Drive tools Action - recv

This action receives a file from Google Drive.

## Environment Variables

### `GOOGLE_APPLICATION_CREDENTIALS`

**Required** path to Service Account Credentials JSON file.

<!-- INSERT -->

## Example usage

```yaml
- id: "auth"
  name: "Authenticate to Google Cloud"
  uses: "google-github-actions/auth@v0"
  with:
    workload_identity_provider: ${{ secrets.WORKLOAD_IDENTITY_PROVIDER }}
    service_account: ${{ secrets.SERVICE_ACCOUNT }}

- name: Receive file
  id: send
  uses: hankei6km/gdrive-act-send@v0
  with:
    parent-id: ${{ secrets.PARENT_ID }}
    src-file-name: ${{ secrets.SRC_FILE_NAME }}
    dest-file-name: ${{ secrets.DEST_FILE_NAME }}
```

## Licenses

MIT License

Copyright (c) 2022 hankei6km
