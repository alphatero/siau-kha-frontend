type Fetcher = (arg: any) => Promise<any>

type NoArgsItem = { fn: Fetcher }
type ArgItem = (arg: any) => { key: any[]; fn: Fetcher }

export type Schema = {
  [k: string]: NoArgsItem | ArgItem
}

export type Mutations<T extends Schema> = {
  [k in keyof T]: T[k] extends NoArgsItem
    ? () => { mutationKey: any[]; mutationFn: T[k]['fn'] }
    : (arg: Parameters<T[k]>[0]) => { mutationKey: any[]; mutationFn: ReturnType<T[k]>['fn'] }
}