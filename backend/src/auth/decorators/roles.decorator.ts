import { SetMetadata } from '@nestjs/common'
import { RoleEnum } from '../../user/enums/role.enum'

export const Roles = (...roles: RoleEnum[]): ReturnType<typeof SetMetadata> =>
  SetMetadata('roles', roles)
