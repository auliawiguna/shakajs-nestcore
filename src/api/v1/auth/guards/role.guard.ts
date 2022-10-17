import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { ROLES_KEY } from "src/decorators/role.decorator"
import { Role } from "src/enums/role.enum"

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
      const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass()
      ])

      if (!requiredRoles) {
        return true
      }

      const request = context.switchToHttp().getRequest()
      let user = request.user
      return requiredRoles.some(role => user.role?.includes(role))
  }
}
