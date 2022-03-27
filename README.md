# Google Drive tools Action - recv

This action receives a file from Google Drive.

## Environment Variables

### `GOOGLE_APPLICATION_CREDENTIALS`

**Required** path to Service Account Credentials JSON file.



## Inputs

| parameter | description | required | default |
| - | - | - | - |
| file_id | The ID of the file or shared drive. | `false` |  |
| parent_id | The ID of the parent folders in remote | `false` |  |
| src_file_name | The name of the file in remote. When there are multiple files with the same parent id and the same name, only one of them is received. | `false` |  |
| dest_file_name | The name(path) of the file in local filesystem | `true` |  |
| dest_mime_type | The MIME type of the file. | `false` |  |


## Outputs

| parameter | description |
| - | - |
| file_id | The ID of the file that is sended into Google Drive |


## Runs

This action is an `node16` action.



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
  uses: hankei6km/gdrive-act-recv@v0
  with:
    parent-id: ${{ secrets.PARENT_ID }}
    src-file-name: ${{ secrets.SRC_FILE_NAME }}
    dest-file-name: ${{ secrets.DEST_FILE_NAME }}
```

## Licenses

MIT License

Copyright (c) 2022 hankei6km
