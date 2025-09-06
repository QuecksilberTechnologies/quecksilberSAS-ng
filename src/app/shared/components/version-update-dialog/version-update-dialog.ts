import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-version-update-dialog',
  imports: [ButtonModule],
  templateUrl: './version-update-dialog.html',
  styleUrl: './version-update-dialog.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionUpdateDialog {
  #ref = inject(DynamicDialogRef);

  closeDialog() {
    this.#ref.close();
  }
}
