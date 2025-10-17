export type TableRow = Record<
  string,
  string | number | boolean | null | undefined
>;

export interface Column<T extends Record<string, unknown> = TableRow> {
  key: keyof T & string;
  label: string;
}
