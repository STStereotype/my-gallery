interface Folder {
  nameFolder: string,
  sizeFolder: number,
  images: Array<string>,
  id: number
}

interface User {
  login: string,
  password: string,
  username: string,
  surname?: string,
  phoneNumber?: string,
  registrationDate: string,
  folders: Array<Folder>,
  id: number
}

export class UsersServices {
  user!: User;
}
