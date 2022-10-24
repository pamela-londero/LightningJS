import { Lightning, Utils } from '@lightningjs/sdk'
import { getMovie } from './lib/Api'

export class Box extends Lightning.Component {
    static _template() {
        return {
            Results: {
                rect: true,
                w: 220,
                h: 330,
                //Method 1 (new one)
                //color: this.bindProp('shade'),
                flexItem: {
                    margin: 20,
                },
        }
        };
    }
    //Method 2 (old one)
    /*_init() {
        this.patch({
            color: this.shade,
        })
    }*/

    async addDataToScreen(url) {
        let data = await getMovie(url)
    
        this.host = data.host
    
        let movies = data.results.map(movie => {
          return {
            text: {
              text: movie.title
            },
            
          }
        })
    
        let tempChildren = this.tag('Results').children
    
        this.tag('Results').patch({
          children: tempChildren.concat(movies)
        })
      }
      
      _handleLeft() {
        this.tag('Results').patch({
          y: this.tag('Results').y - 5
        })
      }
    
      _handleRight() {
        this.tag('Results').patch({
          y: this.tag('Results').y + 5
        })
      }
    
      _handleEnter() {
        this.addDataToScreen(this.host)
      }
    
      _init() {
        this.addDataToScreen('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6d3086c7646276071d28262bce2b4e28')
      }
}