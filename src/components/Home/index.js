import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-text-container">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-image home-text-image"
        />

        <p className="description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been the marker of the era
          and we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button className="button" type="button">
          Shop Now
        </button>
      </div>
      <div className="home-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-image"
        />
      </div>
    </div>
  </>
)

export default Home
