// types
import { AuthProps } from './auth';
import { CalendarProps } from './calendar';
import { MenuProps } from './menu';
import { SnackbarProps } from './snackbar';

// ==============================|| ROOT TYPES  ||============================== //

export type RootStateProps = {
  auth: AuthProps;
  calendar: CalendarProps;
  menu: MenuProps;
  snackbar: SnackbarProps;
};

export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};
