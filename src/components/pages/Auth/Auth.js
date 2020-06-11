import React from 'react';

import './Auth.scss';

class Auth extends React.Component {

  render() {
    return (
      <div className="Auth">
        <div className="container">
          {/* ACCORDION CODE STARTS HERE */}

          <div className="ia-container">

            <figure>
              <img src="https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg" alt="Rome, Italy" />
              <input type="radio" name="radio-set" defaultChecked="checked" />
              <figcaption><span>Travel</span></figcaption>

              <figure>
                <img src="https://www.smartcitiesworld.net/AcuCustom/Sitename/DAM/020/Paris_AdobeStock_264549883_1.jpg" alt="Paris, France" />
                <input type="radio" name="radio-set" />
                <figcaption><span>Explore</span></figcaption>

                <figure>
                  <img src="https://media.gettyimages.com/photos/berlin-city-nights-picture-id109861425?s=612x612" alt="Berlin, Germany" />
                  <input type="radio" name="radio-set" />
                  <figcaption><span>Observe</span></figcaption>

                  <figure>
                    <img src="https://media.gettyimages.com/photos/bern-city-swtizerland-picture-id607533408?s=612x612" alt="Bern, Switzerland" />
                    <input type="radio" name="radio-set" />
                    <figcaption><span>Uncover</span></figcaption>

                    <figure>
                      <img src="https://media.gettyimages.com/photos/old-town-bucharest-romania-nightlife-picture-id495292882?s=612x612" alt="Bucharest, Romania" />
                      <input type="radio" name="radio-set" />
                      <figcaption><span>Learn</span></figcaption>

                      <figure>
                        <img src="https://lp-cms-production.imgix.net/2019-06/6303650c1b029ccf013c3c59d260fd9f-aleksander-nevski-cathedral.jpg" alt="Sofia, Bulgaria" />
                        <input type="radio" name="radio-set" />
                        <figcaption><span>Adapt</span></figcaption>

                        <figure>
                          <img src="https://www.nationalgeographic.com/content/dam/travel/2018-digital/Explorer-Guides-2018/athens-explorer-guide/acropolis-athens-greece-lead.jpg" alt="Athens, Greece" />
                          <input type="radio" name="radio-set" />
                          <figcaption><span>Change</span></figcaption>

                        </figure>

                      </figure>

                    </figure>

                  </figure>

                </figure>

              </figure>

            </figure>

          </div>
{/* ACCORDION MARKUP ENDS HERE */}
        </div>
      </div>
    );
  }
}

export default Auth;
