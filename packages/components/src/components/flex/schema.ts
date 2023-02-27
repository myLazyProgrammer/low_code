import { Type } from '@sinclair/typebox';

enum FlexDirection {
  Column = 'column',
  Row = 'row',
}

export default {
  "spec": {
    "properties": Type.Object({
      "direction": Type.Enum(FlexDirection)
    })
  }
}