import moment from "moment";

export const useTime = (datetime:string) => {
  moment.locale('nb');
  return moment(datetime).format('LT');
}
