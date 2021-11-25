export interface DataType {
  name: string;
  size: number | string;
  date: string;
  selected?: boolean;
}

const data: DataType[] = [
  { name: "AUTOEXEC.BAT", size: 190, date: "21-11-25" },
  { name: "CONFIG.SYS", size: 123, date: "21-11-25" },
  { name: "test.txt", size: 1221, date: "21-11-25" },
  { name: "divx.cfg", size: 41, date: "21-11-25" },
  { name: "Movies.txt", size: 2231, date: "21-11-25" },
  { name: "AUTOEXEC.BAT", size: 190, date: "21-11-25" },
  { name: "CONFIG.SYS", size: 123, date: "21-11-25", selected: true },
  { name: "test.txt", size: 1221, date: "21-11-25" },
  { name: "divx.cfg", size: 41, date: "21-11-25" },
  { name: "Movies.txt", size: 2231, date: "21-11-25" },
  { name: "AUTOEXEC.BAT", size: 190, date: "21-11-25" },
  { name: "CONFIG.SYS", size: 123, date: "21-11-25" },
  { name: "test.txt", size: 1221, date: "21-11-25" },
  { name: "divx.cfg", size: 41, date: "21-11-25" },
  { name: "Movies.txt", size: 2231, date: "21-11-25" },
  { name: "AUTOEXEC.BAT", size: 190, date: "21-11-25" },
  { name: "CONFIG.SYS", size: 123, date: "21-11-25" },
  { name: "test.txt", size: 1221, date: "21-11-25" },
  { name: "divx.cfg", size: 41, date: "21-11-25" },
  { name: "Movies.txt", size: 2231, date: "21-11-25" },
];

export default data;
