export class MakeData {
  static getEmail() {
    return `${Math.random().toString(36).slice(2, 8)}qa@ukr.net`;
  }

  static getUserNickname() {
    return `AqaTester${Math.random().toString(36).slice(2, 5)}`
  }
  static getPasswordByLength(num) {
    return `${Math.random().toString(36).slice(2, num)}`;
  }
}