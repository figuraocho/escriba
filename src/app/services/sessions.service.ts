import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Session } from '../sessions/session.model';

@Injectable({
  providedIn: 'root',
})
export class SesionsService {

  sessionsChange: Subject<Session[]> = new Subject<Session[]>();

  sessions: Session[] = [
    new Session(
      new Date('06/05/2021'),
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed dictum velit. Maecenas nisi mauris, fermentum a bibendum vel, lobortis euismod lacus. Nulla massa nulla, efficitur porttitor ligula a, euismod sagittis magna. In fringilla, neque ut accumsan laoreet, ligula libero vestibulum arcu, a fermentum est felis tempor turpis. Donec vel velit facilisis, semper dui volutpat, ullamcorper ligula. Fusce id lectus commodo, semper libero eget, rhoncus purus. Nulla vitae tincidunt libero. Donec nisi enim, auctor in tristique nec, blandit quis nulla. Cras ultricies quam eget dictum vulputate. Donec sagittis ligula eget odio egestas, eu iaculis sem venenatis.

Praesent et augue et enim ultricies rhoncus at eget nunc. Curabitur suscipit nunc id justo rhoncus, eu rhoncus nulla sodales. Nam ut bibendum quam. Phasellus rutrum nisl ut viverra semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut nibh pretium, tincidunt nulla at, euismod erat. Vivamus dictum neque egestas posuere viverra. Nullam egestas neque risus, ac imperdiet urna dignissim in. Curabitur quis magna ac nisl imperdiet ultrices semper mollis metus. Aenean in varius augue. Pellentesque posuere enim ac magna efficitur porta. Duis faucibus lacus sit amet felis ornare, id vulputate mauris porttitor. Nullam interdum commodo lacus, vel vestibulum ligula porttitor nec. Maecenas ante dui, mattis a enim ut, volutpat suscipit lorem. Praesent eget ipsum vel mauris pellentesque mollis. Fusce nec nibh vestibulum, fermentum enim sed, interdum justo.

Suspendisse vitae auctor enim, in aliquam urna. Nunc dolor diam, vulputate nec enim quis, commodo congue dolor. Maecenas sodales aliquam nulla, a luctus nulla pellentesque sit amet. Nunc at nunc eros. Fusce a eros ante. Morbi posuere lacus quis odio feugiat sollicitudin. Nulla mollis ex et mauris finibus, sed convallis turpis volutpat. Pellentesque nec dapibus dolor. Etiam sit amet maximus odio. Suspendisse potenti.

Etiam pretium sodales nisl, eu aliquam nisi gravida nec. Nulla ultricies consequat nibh quis maximus. Etiam ac cursus sapien. Fusce faucibus molestie diam. Mauris ac placerat mi. Vivamus ullamcorper neque a porta iaculis. Morbi enim lorem, lobortis a mi at, condimentum facilisis arcu. Duis dignissim massa nec ullamcorper accumsan. Vestibulum maximus velit ligula, ut molestie risus consequat quis. Fusce risus nisi, luctus vel felis at, egestas vulputate neque. Phasellus imperdiet nulla eu neque iaculis, eget molestie purus feugiat.

Suspendisse iaculis blandit lacinia. Aliquam id diam vitae ipsum placerat facilisis non vel sapien. Praesent ut imperdiet eros. Morbi egestas efficitur neque, non congue est congue sed. Nulla interdum auctor ante, nec dictum eros. Etiam mi magna, tempor nec neque non, laoreet convallis dui. Proin lorem ante, aliquet efficitur sem nec, interdum venenatis lorem. Sed quis velit sed dolor ultrices blandit. Nam pharetra elementum euismod. Nunc tellus lectus, ultrices at lacus a, hendrerit pharetra sem. Suspendisse faucibus id elit et dignissim. Morbi viverra sollicitudin magna et iaculis. Aenean sagittis accumsan orci et cursus. Suspendisse nec luctus sapien, in sodales nisi. Cras posuere vestibulum nunc, ut euismod sem efficitur eu. Fusce lacus mi, dictum ornare elementum quis, molestie sit amet nisl.`
    ),
    new Session(
      new Date('07/05/2021'),
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed dictum velit. Maecenas nisi mauris, fermentum a bibendum vel, lobortis euismod lacus. Nulla massa nulla, efficitur porttitor ligula a, euismod sagittis magna. In fringilla, neque ut accumsan laoreet, ligula libero vestibulum arcu, a fermentum est felis tempor turpis. Donec vel velit facilisis, semper dui volutpat, ullamcorper ligula. Fusce id lectus commodo, semper libero eget, rhoncus purus. Nulla vitae tincidunt libero. Donec nisi enim, auctor in tristique nec, blandit quis nulla. Cras ultricies quam eget dictum vulputate. Donec sagittis ligula eget odio egestas, eu iaculis sem venenatis.

Praesent et augue et enim ultricies rhoncus at eget nunc. Curabitur suscipit nunc id justo rhoncus, eu rhoncus nulla sodales. Nam ut bibendum quam. Phasellus rutrum nisl ut viverra semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut nibh pretium, tincidunt nulla at, euismod erat. Vivamus dictum neque egestas posuere viverra. Nullam egestas neque risus, ac imperdiet urna dignissim in. Curabitur quis magna ac nisl imperdiet ultrices semper mollis metus. Aenean in varius augue. Pellentesque posuere enim ac magna efficitur porta. Duis faucibus lacus sit amet felis ornare, id vulputate mauris porttitor. Nullam interdum commodo lacus, vel vestibulum ligula porttitor nec. Maecenas ante dui, mattis a enim ut, volutpat suscipit lorem. Praesent eget ipsum vel mauris pellentesque mollis. Fusce nec nibh vestibulum, fermentum enim sed, interdum justo.

Suspendisse vitae auctor enim, in aliquam urna. Nunc dolor diam, vulputate nec enim quis, commodo congue dolor. Maecenas sodales aliquam nulla, a luctus nulla pellentesque sit amet. Nunc at nunc eros. Fusce a eros ante. Morbi posuere lacus quis odio feugiat sollicitudin. Nulla mollis ex et mauris finibus, sed convallis turpis volutpat. Pellentesque nec dapibus dolor. Etiam sit amet maximus odio. Suspendisse potenti.

Etiam pretium sodales nisl, eu aliquam nisi gravida nec. Nulla ultricies consequat nibh quis maximus. Etiam ac cursus sapien. Fusce faucibus molestie diam. Mauris ac placerat mi. Vivamus ullamcorper neque a porta iaculis. Morbi enim lorem, lobortis a mi at, condimentum facilisis arcu. Duis dignissim massa nec ullamcorper accumsan. Vestibulum maximus velit ligula, ut molestie risus consequat quis. Fusce risus nisi, luctus vel felis at, egestas vulputate neque. Phasellus imperdiet nulla eu neque iaculis, eget molestie purus feugiat.

Suspendisse iaculis blandit lacinia. Aliquam id diam vitae ipsum placerat facilisis non vel sapien. Praesent ut imperdiet eros. Morbi egestas efficitur neque, non congue est congue sed. Nulla interdum auctor ante, nec dictum eros. Etiam mi magna, tempor nec neque non, laoreet convallis dui. Proin lorem ante, aliquet efficitur sem nec, interdum venenatis lorem. Sed quis velit sed dolor ultrices blandit. Nam pharetra elementum euismod. Nunc tellus lectus, ultrices at lacus a, hendrerit pharetra sem. Suspendisse faucibus id elit et dignissim. Morbi viverra sollicitudin magna et iaculis. Aenean sagittis accumsan orci et cursus. Suspendisse nec luctus sapien, in sodales nisi. Cras posuere vestibulum nunc, ut euismod sem efficitur eu. Fusce lacus mi, dictum ornare elementum quis, molestie sit amet nisl.`
    ),
    new Session(
      new Date('08/05/2021'),
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed dictum velit. Maecenas nisi mauris, fermentum a bibendum vel, lobortis euismod lacus. Nulla massa nulla, efficitur porttitor ligula a, euismod sagittis magna. In fringilla, neque ut accumsan laoreet, ligula libero vestibulum arcu, a fermentum est felis tempor turpis. Donec vel velit facilisis, semper dui volutpat, ullamcorper ligula. Fusce id lectus commodo, semper libero eget, rhoncus purus. Nulla vitae tincidunt libero. Donec nisi enim, auctor in tristique nec, blandit quis nulla. Cras ultricies quam eget dictum vulputate. Donec sagittis ligula eget odio egestas, eu iaculis sem venenatis.

Praesent et augue et enim ultricies rhoncus at eget nunc. Curabitur suscipit nunc id justo rhoncus, eu rhoncus nulla sodales. Nam ut bibendum quam. Phasellus rutrum nisl ut viverra semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut nibh pretium, tincidunt nulla at, euismod erat. Vivamus dictum neque egestas posuere viverra. Nullam egestas neque risus, ac imperdiet urna dignissim in. Curabitur quis magna ac nisl imperdiet ultrices semper mollis metus. Aenean in varius augue. Pellentesque posuere enim ac magna efficitur porta. Duis faucibus lacus sit amet felis ornare, id vulputate mauris porttitor. Nullam interdum commodo lacus, vel vestibulum ligula porttitor nec. Maecenas ante dui, mattis a enim ut, volutpat suscipit lorem. Praesent eget ipsum vel mauris pellentesque mollis. Fusce nec nibh vestibulum, fermentum enim sed, interdum justo.

Suspendisse vitae auctor enim, in aliquam urna. Nunc dolor diam, vulputate nec enim quis, commodo congue dolor. Maecenas sodales aliquam nulla, a luctus nulla pellentesque sit amet. Nunc at nunc eros. Fusce a eros ante. Morbi posuere lacus quis odio feugiat sollicitudin. Nulla mollis ex et mauris finibus, sed convallis turpis volutpat. Pellentesque nec dapibus dolor. Etiam sit amet maximus odio. Suspendisse potenti.

Etiam pretium sodales nisl, eu aliquam nisi gravida nec. Nulla ultricies consequat nibh quis maximus. Etiam ac cursus sapien. Fusce faucibus molestie diam. Mauris ac placerat mi. Vivamus ullamcorper neque a porta iaculis. Morbi enim lorem, lobortis a mi at, condimentum facilisis arcu. Duis dignissim massa nec ullamcorper accumsan. Vestibulum maximus velit ligula, ut molestie risus consequat quis. Fusce risus nisi, luctus vel felis at, egestas vulputate neque. Phasellus imperdiet nulla eu neque iaculis, eget molestie purus feugiat.

Suspendisse iaculis blandit lacinia. Aliquam id diam vitae ipsum placerat facilisis non vel sapien. Praesent ut imperdiet eros. Morbi egestas efficitur neque, non congue est congue sed. Nulla interdum auctor ante, nec dictum eros. Etiam mi magna, tempor nec neque non, laoreet convallis dui. Proin lorem ante, aliquet efficitur sem nec, interdum venenatis lorem. Sed quis velit sed dolor ultrices blandit. Nam pharetra elementum euismod. Nunc tellus lectus, ultrices at lacus a, hendrerit pharetra sem. Suspendisse faucibus id elit et dignissim. Morbi viverra sollicitudin magna et iaculis. Aenean sagittis accumsan orci et cursus. Suspendisse nec luctus sapien, in sodales nisi. Cras posuere vestibulum nunc, ut euismod sem efficitur eu. Fusce lacus mi, dictum ornare elementum quis, molestie sit amet nisl.`
    ),
  ];

  constructor() {}

  getSessions(){
    return this.sessions.slice();
  }

  getSession(index:number){
    return this.sessions[index];
  }

  addSession(newSession:Session){
    this.sessions.push(newSession);
    this.sessionsChange.next(this.sessions.slice());
  }

  deleteSession(index:number){
    this.sessions.splice(index,1);
    this.sessionsChange.next(this.sessions.slice());
  }
}
