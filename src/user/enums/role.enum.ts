import { registerEnumType } from '@nestjs/graphql'

export enum RoleEnum {
  Author,
  Admin
}

registerEnumType(RoleEnum, { name: 'RoleEnum' })
