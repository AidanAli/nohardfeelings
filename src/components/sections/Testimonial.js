import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Community Videos',
    paragraph: 'Various Game Videos', 
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

          <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                  <Image
                      src={require('./../../assets/images/img_world002.jpg')}
                      alt="Features tile icon 01"
                      width={500}
                      height={100}
                      padding="px" />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">ArcheRage</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://youtu.be/nsWycasUXf8">Pvp</a>
                  </span>
                  <p>ArcheRage Blade Dancer Pvp 7.0</p>
                </div>
              </div>
            </div>

            
          <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                  <Image
                      src={require('./../../assets/images/img_world003.jpg')}
                      alt="Features tile icon 01"
                      width={500}
                      height={100}
                      padding="px" />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">ArcheRage</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://youtu.be/jm4Lp0zzsBU">Pvp</a>
                  </span>
                  <p>AAU RIP Tatia West Faction Pup</p>
                </div>
              </div>
            </div>

               <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                  <Image
                      src={require('./../../assets/images/img_world002.jpg')}
                      alt="Features tile icon 01"
                      width={500}
                      height={100}
                      padding="px" />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">ArcheRage</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.youtube.com/watch?v=xyOBvS31RZU">Pvp</a>
                  </span>
                  <p>AAU 9.0 Bladedancer PvP</p>
                </div>
              </div>
            </div>

          <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                  <Image
                      src={require('./../../assets/images/img_world003.jpg')}
                      alt="Features tile icon 01"
                      width={500}
                      height={100}
                      padding="px" />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">ArcheRage</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.youtube.com/watch?v=GNjS76y9RF8&t=153s">Pvp</a>
                  </span>
                  <p>No Hard Feelings - AAU PvP</p>
                </div>
              </div>
            </div>



            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                  <Image
                      src={require('./../../assets/images/img_world006.jpg')}
                      alt="Features tile icon 01"
                      width={500}
                      height={100}
                      padding="px" />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">ArcheRage</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.youtube.com/watch?v=iUBhQvhs_Hc">Pvp</a>
                  </span>
                  <p>ArcheRage 7.0 PvP UwU</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="">
                  <p className="text-sm mb-0">
                  <Image
                      src={require('./../../assets/images/img_world002.jpg')}
                      alt="Features tile icon 01"
                      width={500}
                      height={420}
                      padding="px" />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">ArcheRage 7.0 Pvp</span>
                  <span className="text-color-low">/</span>
                  <span className="testimonial-item-link">
                    <a href="https://www.youtube.com/watch?v=JNPkutNcWNQ">PvP</a>
                  </span>
                  <p>ArcheRage 7.0 PvP 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;