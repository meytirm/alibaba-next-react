export interface MenuItem {
  label: string;
  href?: string;
  subMenuItems?: Omit<MenuItem, 'subMenuItems'>[];
}
