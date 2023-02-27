import { Static } from '@sinclair/typebox';
import schema from './schema';

type ButtonProps = Static<typeof schema.spec.properties>

export const Button = () => {
    console.log(schema)
}