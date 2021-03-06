import { GraphQLError } from "../error";
import { DocumentNode } from "../language/ast";
import { GraphQLSchema } from "../type/schema";
import { TypeInfo } from "../utilities/TypeInfo";

/**
 * Implements the "Validation" section of the spec.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the document is valid.
 *
 * A list of specific validation rules may be provided. If not provided, the
 * default list of rules defined by the GraphQL specification will be used.
 *
 * Each validation rules is a function which returns a visitor
 * (see the language/visitor API). Visitor methods are expected to return
 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
 *
 * Optionally a custom TypeInfo instance may be provided. If not provided, one
 * will be created from the provided schema.
 */
export function validate(
    schema: GraphQLSchema,
    ast: DocumentNode,
    rules?: ReadonlyArray<any>,
    typeInfo?: TypeInfo
): ReadonlyArray<GraphQLError>;
