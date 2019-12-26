import { Component, OnInit } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize, tap } from 'rxjs/operators';
@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  // Main task
  public task: AngularFireUploadTask;

  // Progress monitoring
  public percentage: Observable<number>;

  public snapshot: Observable<any>;

  // Download URL
  public downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  public isHovering: boolean;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {}

  public toggleHover(event: boolean): void {
    this.isHovering = event;
  }

  public startUpload(event: FileList): void {
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }

    // The storage path
    const path = `test/logo`;

    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });
    const ref = this.storage.ref(path);
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();
    // this.snapshot = this.task.snapshotChanges().pipe(
    //  tap(snap => {
    //    if (snap.bytesTransferred === snap.totalBytes) {
    // Update firestore on completion
    //    this.db.collection('photos').add({ path, size: snap.totalBytes });
    //   }
    //  }),
    //);
    // The file's download URL
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = ref.getDownloadURL();
        }),
      )
      .subscribe();
  }

  // Determines if the upload task is active
  public isActive(snapshot: any): boolean {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
