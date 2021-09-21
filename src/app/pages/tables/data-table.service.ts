import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor(private angularFirestore: AngularFirestore) { }

  getDataDoc(col, id) {
    return this.angularFirestore
      .collection(col)
      .doc(id)
      .valueChanges()
  }

  getRealTimeData(col) {
    return this.angularFirestore
      .collection(col)
      .get();
  }

  getDataList(col) {
    return this.angularFirestore
      .collection(col)
      .snapshotChanges();
  }

  createData(col, data) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection(col)
        .add(data)
        .then(response => { this.createDataKey(col, response.id) }, error => reject(error));
    });
  }

  createDataKey(col, keyid) {
    return this.angularFirestore
      .collection(col)
      .doc(keyid)
      .update({ key: keyid });
  }

  deleteData(col, data) {
    return this.angularFirestore
      .collection(col)
      .doc(data.key)
      .delete();
  }

  updateData(col, data) {
    return this.angularFirestore
      .collection(col)
      .doc(data.key)
      .update(data);
  }

  deleteAll(data, id) {
    this.deleteData(data, id);
  }
}
