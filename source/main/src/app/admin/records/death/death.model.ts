import { formatDate } from '@angular/common';
export class Death {
  id: number;
  case_no: string;
  patient_name: string;
  gender: string;
  death_date: string;
  guardian_name: string;
  mobile: string;
  address: string;
  note: string;
  constructor(death: Death) {
    {
      this.id = death.id || this.getRandomID();
      this.case_no = death.case_no || '';
      this.patient_name = death.patient_name || '';
      this.gender = death.gender || 'Male';
      this.death_date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.guardian_name = death.guardian_name || '';
      this.mobile = death.mobile || '';
      this.address = death.address || '';
      this.note = death.note || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
