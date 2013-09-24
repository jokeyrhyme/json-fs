# json-fs: Mapping

This is a specification of which aspects of a JSON structure map to which
aspects of a file-system.

## file-system structures

### Directory

The name of a Directory contains the following dot-separated components, from
left to right:

- label
- extension: specifies the JSON type

These name components are mandatory.

### File

The name of a File contains the following dot-separated components, from left
to right:

- label
- inner extension: specifies the JSON type
- extension

These name components are mandatory. If no desired extension is otherwise
specified, "txt" will be used by default.

## JSON types

### Null, Boolean, Number, String

Values of these types are stored on disk as the contents of a File.

The type of the JSON value only dictates the inner extension.

The type of the JSON value provides a suggestion for the File extension to use,
as follows:

type      | extension
--------- | -------------------
Null      | txt
Boolean   | txt
Number    | txt
String    | txt

The label for the File is unspecified without further context.

### Array

Array structures are treated as Object structures with numeric keys. As such,
an Array is represented within a file-system as a Directory.

The label for the Directory representing an Array is unspecified without
further context.

The extension for the Directory is "array".

### Object

The contents of an Object are placed in a new (sub-)Directory.

For each key -> value pair, the type of the value determines whether to use a
File or a Directory. The key determines the label of the File or Directory.

The label for the Directory representing an Object is unspecified without
further context.

The extension for the Directory is "object".

## Example

```json
{
  "abc": null,
  "def": true
  "ghi": 123,
  "jkl": "mno",
  "pqr": [
    null,
    false,
    456,
    "stu",
    {
      "vwx": null
    }
  ]
}
```

- unlabeled.object

  - abc.null.txt

  - def.boolean.txt

  - ghi.number.txt

  - jkl.string.txt

  - pqr.array

    - 0.null.txt

    - 1.boolean.txt

    - 2.number.txt

    - 3.string.txt

    - 4.object

      - vwx.null.txt
