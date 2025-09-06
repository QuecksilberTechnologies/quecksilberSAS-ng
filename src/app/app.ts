import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { Navbar, VersionUpdateDialog } from '@shared/components';
import { Footer } from '@shared/components/footer/footer';
import { NgProgressbar } from 'ngx-progressbar';
import { NgProgressRouter } from 'ngx-progressbar/router';
import { PrimeNG } from 'primeng/config';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, NgProgressbar, NgProgressRouter, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  readonly #updates = inject(SwUpdate);
  readonly #destroyRef = inject(DestroyRef);
  readonly #primeng = inject(PrimeNG);
  readonly #dialogService = inject(DialogService);
  protected ref: DynamicDialogRef | undefined;

  constructor() {
    this.versionUpdatesSub();
  }

  versionUpdatesSub() {
    this.#updates.versionUpdates.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe(evt => {
      if (evt.type === 'VERSION_READY') {
        console.info(`👉Current app version: ${evt.currentVersion.hash}`);
        console.info(`✅New app version ready for use: ${evt.latestVersion.hash}`);

        this.ref = this.#dialogService.open(VersionUpdateDialog, {
          header: '✨Update Available',
          modal: true,
          width: '38rem',
          closable: false,
        });

        this.ref.onClose.subscribe(() => {
          location.reload();
        });

        this.#destroyRef.onDestroy(() => {
          if (this.ref) {
            this.ref.close();
          }
        });
      }
    });
  }

  ngOnInit() {
    this.#primeng.ripple.set(false);
  }
}
