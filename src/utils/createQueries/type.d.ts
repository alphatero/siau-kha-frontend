type Fetcher = (arg: any) => Promise<any>

type NoArgsItem = { fn: Fetcher }
type ArgItem = (arg: any) => { key: any[]; fn: Fetcher }

export type Schema = {
  [k: string]: NoArgsItem | ArgItem
}

export type Queries<T extends Schema> = {
  [k in keyof T]: T[k] extends NoArgsItem
    ? () => { queryKey: any[]; queryFn: T[k]['fn'] }
    : (arg: Parameters<T[k]>[0]) => { queryKey: any[]; queryFn: ReturnType<T[k]>['fn'] }
}
