import { Type } from '@sinclair/typebox';
import { ButtonProps } from '@arco-design/web-react'

enum HtmlType {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset'
}

enum Shape {
  Circle = 'circle',
  Round = 'round',
  Square = 'square',
}



enum Status {
  Mini = 'mini',
  Small = 'small',
  Default = 'default',
  Large = 'large',
}

export function StringUnion<T extends (string | number)[]>(
  values: [...T],
  options?: any
) {
  return Type.KeyOf(
    Type.Object(
      values.reduce((prev, cur) => {
        prev[cur] = Type.Boolean();
        return prev;
      }, {} as Record<T[number], any>)
    ),
    options
  );
}


export default {
  "spec": {
    "properties": Type.Object({
      "disabled": Type.Boolean(),
      "iconOnly": Type.Boolean(),
      "loading": Type.Boolean(),
      "loadingFixedWidth": Type.Boolean(),
      "long": Type.Boolean(),
      "href": Type.String(),
      "target": Type.String(),
      "shape": StringUnion(['circle', 'round', 'square']),
      "htmlType": StringUnion(['button','submit','reset']),
      "size": StringUnion(['mini','small','default', 'large']),
      "status": StringUnion(['warning', 'danger', 'success', 'default']),
      "type": StringUnion(['default', 'primary', 'secondary', 'dashed', 'text', 'outline']),
    }),
    "slots": {
      icon: { slotProps: Type.Object({}) },
    },
    event: ["onClick"]
  }
}