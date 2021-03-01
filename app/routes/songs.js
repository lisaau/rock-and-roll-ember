import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

let Song = EmberObject.extend({
    title:'',
    band:'',
    rating: 0
});

export default class SongsRoute extends Route {
    model() {
        let blackDog = Song.create({
            title: 'Black Dog',
            band: 'Led Zepplin',
            rating: 3
        });

        let yellowLedbetter = Song.create({
            title:'Yellow Ledbetter',
            band:'Pearl Jam',
            rating: 4
        });

        let pretender = Song.create({
            title:'The Pretender',
            band:'Foo Fighters',
            rating: 2
        });
            
        return [blackDog, yellowLedbetter, pretender];
    }
}
