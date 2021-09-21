import { Injectable } from '@angular/core';
import { SmartTableData, SmartTableModel } from '../data/smart-table';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class SmartTableService extends SmartTableData {
  dataModel: SmartTableModel[];
  addData = [{}];
  
  constructor(private angularFirestore: AngularFirestore) {
    super();
  }

  getUserList() {
    return this.angularFirestore
      .collection("tm_gudang")
      .snapshotChanges();
  };

  getData() {
    let i = 0;

    this.getUserList().subscribe(res => {
      res.map(e => {
        this.addData[i] = e.payload.doc.data();
        i++;
      });
      // res.forEach(test => {
      //   this.addData[i] = test.payload.doc.data();
      //   i++;
      // });
    });

    console.log(
      this.addData
    )

    return this.addData;
  }

}
