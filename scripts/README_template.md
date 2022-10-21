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
  id: receive
  uses: hankei6km/gdrive-act-recv@v:CUR_VER
  with:
    parent_id: ${{ secrets.PARENT_ID }}
    src_file_name: ${{ secrets.SRC_FILE_NAME }}
    dest_file_name: ${{ secrets.DEST_FILE_NAME }}
```

## Related

- [Google Drive tools Action - send](https://github.com/hankei6km/gdrive-act-send)
- [Google Drive tools Action - share](https://github.com/hankei6km/gdrive-act-share)

## Licenses

MIT License

Copyright (c) 2022 hankei6km
