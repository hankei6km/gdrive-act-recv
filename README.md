# Google Drive tools Action - recv

This action receives a file from Google Drive.

## Environment Variables

### `GOOGLE_APPLICATION_CREDENTIALS`

**Required** path to Service Account Credentials JSON file.

## Inputs

| name | description | required | default |
| --- | --- | --- | --- |
| `file_id` | <p>The ID of the file or shared drive.</p> | `false` | `""` |
| `parent_id` | <p>The ID of the parent folders in remote</p> | `false` | `""` |
| `src_file_name` | <p>The name of the file in remote. When there are multiple files with the same parent id and the same name, only one of them is received.</p> | `false` | `""` |
| `dest_file_name` | <p>The name(path) of the file in local filesystem</p> | `true` | `""` |
| `dest_mime_type` | <p>The MIME type of the file.</p> | `false` | `""` |
| `remove_bom` | <p>Remove BOM chars in receiving content</p> | `false` | `""` |

## Outputs

| name | description |
| --- | --- |
| `file_id` | <p>The ID of the file that is sended into Google Drive. Be careful, the ID of the file can also be sensitive data.</p> |

## Runs

This action is a `node20` action.

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
  uses: hankei6km/gdrive-act-recv@v0.6.4
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
