import { Static } from '@sinclair/typebox';
import schema from './schema';

type Props = Static<typeof schema.spec.properties>

export const Flex = (props: Props) => {
  console.log(schema)  
}