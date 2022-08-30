export interface HashComparer {
  compare(key: string, value: string): Promise<boolean>
}
