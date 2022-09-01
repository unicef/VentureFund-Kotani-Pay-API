import { Role } from "@kotanicore/auth/rbac/enums/role.enum";

export interface UserInterface {
  name: string;
  phoneNumber: string;
  email: string;
  id: string;
  password: string;
  roles: Role[];
}
