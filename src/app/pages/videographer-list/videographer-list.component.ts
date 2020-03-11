import { Component, OnInit } from '@angular/core';
import { Videographer } from 'src/app/shared/models/videographer';
import { VideographerService } from 'src/app/services/videographer.service';
import { AuthService } from 'src/app/services/auth.service';
import { finalize } from 'rxjs/operators';
import { VideosService } from 'src/app/services/videos.service';
import { Video } from 'src/app/shared/models/video';

@Component({
  selector: 'app-videographer-list',
  templateUrl: './videographer-list.component.html',
  styleUrls: ['./videographer-list.component.scss']
})
export class VideographerListComponent implements OnInit {
  greeting = "";
  videographers: Videographer[] = [];
  title = 'video-portfolio-app';
  loading = true;
  videos: Video[];

  constructor(
    public auth: AuthService,
    private videographerService: VideographerService,
    private videosService: VideosService) { }

  ngOnInit() {
    this.videographerService.getVideographers().pipe(finalize(() => this.loading = false))
      .subscribe(response => {
        this.videographers = response as Videographer[]
      });

      this.videosService.getVideos().subscribe((res) => {
        this.videos = res.videos as Video[];
      })
  }

  deletePortfolio(id: string, index: number) {
    this.videographerService.deleteVideographer(id).subscribe(res => {
      if (res['success'] == true) {
        this.videographers.splice(index, 1)
      }
    });
  }

  getLink(vg: Videographer) {
    return vg.id;
  }

  onScroll() {
    if(this.videos){
      this.videosService.getVideos(this.videos[this.videos.length - 1]).subscribe((res) => {
        let newVideos = res.videos as Video[];
        this.videos.push(...newVideos);
      });
    }
  }
}
