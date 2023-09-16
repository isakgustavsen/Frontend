import moment from "moment";

export const useDate = (datetime:string) => {
  moment.locale('nb');
  return moment(datetime).format('LL');
}
