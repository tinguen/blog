import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { RoleEnum } from '../../user/enums/role.enum'

@Injectable()
export class GqlRolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context)
    const roles = this.reflector.get<RoleEnum[]>('roles', context.getHandler())
    if (!roles) {
      return true
    }
    const request = ctx.getContext().req
    const user = request.user
    return roles.includes(user.role)
  }
}
