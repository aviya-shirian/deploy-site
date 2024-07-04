import type { AccessToken, SiteData, WMLFiles } from '@wix/wml-site-deployer'
import {accessToken} from '/Users/aviyash/.wix/auth/57e6e870-2031-44f0-b482-6bcce0a53f89.json'

const siteId = 'b45c1bd6-9161-4539-940f-be8fd89c6413'
const msid = '57e6e870-2031-44f0-b482-6bcce0a53f89'
const token: AccessToken = accessToken

const wmlSite: WMLFiles = {
    'structure.xml': `<Page codeName="page1" id="c1dmp">
    <Section codeName="section1" id="comp-kbgaghri">
    <MediaPlayer codeName="videoBox1" id="comp-lkogdnos">
    <MediaOverlayControls id="comp-lkogdnp1" />
    <MediaControls id="comp-lkogdnp72" />
    </MediaPlayer>
    <Container codeName="box2" id="comp-ljpoeu3c">
    <WRichText codeName="text4" id="comp-ljpo9v9q">
    <![CDATA[<h1 class="font_0"><span>FIVE<br />
    28</span></h1>]]>
    </WRichText>
    <WRichText codeName="text5" id="comp-ljpobc0m">
    <![CDATA[<p class="font_8"><span>Landscape Design</span></p>]]>
    </WRichText>
    </Container>
    <StylableButton codeName="button13" href="page:#tlij8" id="comp-lk9qff7o" rel="">
    EXPLORE
    </StylableButton>
    </Section>
    <RefComponent id="comp-kd5px9q0" />
    </Page>`,
    'style.css': `@media (canvas-size: 1280px) {
        #c1dmp {
            height: auto;
            component-layout: ComponentLayout;
            grid-template-columns: minmax(0px,1fr);
            overflow-x: clip;
            overflow-y: clip;
            grid-template-rows: auto;
            container-layout: GridContainerLayout;
            layout-spx-refWidth: 390;
            layout-spx-resolverType: "scale";
            layout-type: SingleLayoutData;
            comp-id: ;
            class-name: ;
            page-id: ;
            skin: wysiwyg.viewer.skins.page.ResponsivePageWithColorBG;
            background: rgba(var(--color_11),1);
            style-type: ComponentStyle;
        }
        
        #comp-kbgaghri {
            design-background-alignType: "center";
            design-background-color: "color_11";
            design-background-colorLayers: [{"fill":{"color":"color_11","type":"SolidColor"},"opacity":1,"type":"SolidColorLayer"}];
            design-background-colorOpacity: 0;
            design-background-colorOverlay: "";
            design-background-colorOverlayOpacity: 0;
            design-background-fittingType: "fill";
            design-background-scrollType: "none";
            design-background-type: "BackgroundMedia";
            design-type: "MediaContainerWithDividers";
            height: auto;
            max-height: 99999px;
            max-width: 99999px;
            min-height: 100vh;
            min-width: 0px;
            component-layout: ComponentLayout;
            grid-template-columns: minmax(0px,1fr);
            grid-template-rows: minmax(maxContent,100%);
            container-layout: GridContainerLayout;
            align-self: stretch;
            grid-column-end: 2;
            grid-column-start: 1;
            grid-row-end: 2;
            grid-row-start: 1;
            justify-self: stretch;
            item-layout: GridItemLayout;
            layout-spx-refWidth: 390;
            layout-spx-resolverType: "scale";
            layout-type: SingleLayoutData;
            comp-id: ;
            class-name: responsive.components.Section;
            page-id: ;
            skin: wysiwyg.viewer.skins.area.RectangleArea;
            spx-ref-width: 1280;
            spx-resolver-type: scale;
            background: rgba(var(--color_11),0);
            style-type: ComponentStyle;
        }
        
        #comp-kd5px9q0 {
            height: auto;
            hidden: false;
            component-layout: ComponentLayout;
            width: auto;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            container-layout: GridContainerLayout;
            align-self: start;
            justify-self: end;
            item-margin-right: 0px;
            item-margin-top: 0px;
            item-layout: FixedItemLayout;
            layout-type: SingleLayoutData;
            comp-id: ;
            class-name: wysiwyg.viewer.components.RefComponent;
            page-id: ;
            skin: wysiwyg.viewer.skins.ResponsiveContainerRefSkin;
            background: rgba(var(--color_11),0);
            style-type: ComponentStyle;
        }
        
        #comp-ljpo9v9q {
            height: auto;
            hidden: false;
            max-width: 99999px;
            min-width: 0px;
            component-layout: ComponentLayout;
            width: 268px;
            align-self: start;
            item-margin-bottom: 3.7313432835820897%;
            item-margin-left: 0%;
            item-margin-right: 0%;
            item-margin-top: 0px;
            order: 1;
            item-layout: StackItemLayout;
            layout-spx-refWidth: 390;
            layout-spx-resolverType: "scale";
            layout-type: SingleLayoutData;
            comp-id: ;
            class-name: wysiwyg.viewer.components.WRichText;
            page-id: ;
            skin: wysiwyg.viewer.skins.WRichTextNewSkin;
            spx-ref-width: 1280;
            spx-resolver-type: scale;
            color: rgb(255,255,255);
            font-size: 60px;
            font-weight: bold;
            letter-spacing: 0.4em;
            line-height: 1.1em;
            text-align: left;
            text-decoration: none;
            style-type: ComponentStyle;
        }
        
        #comp-ljpobc0m {
            height: auto;
            hidden: false;
            max-width: 99999px;
            min-width: 0px;
            component-layout: ComponentLayout;
            width: 268px;
            align-self: start;
            item-margin-bottom: 0%;
            item-margin-left: 0%;
            item-margin-right: 0%;
            item-margin-top: 0px;
            order: 2;
            item-layout: StackItemLayout;
            layout-spx-refWidth: 390;
            layout-spx-resolverType: "scale";
            layout-type: SingleLayoutData;
            comp-id: ;
            class-name: wysiwyg.viewer.components.WRichText;
            page-id: ;
            skin: wysiwyg.viewer.skins.WRichTextNewSkin;
            spx-ref-width: 1280;
            spx-resolver-type: scale;
            color: rgb(var(--color_11));
            font-size: 14px;
            letter-spacing: 0.39em;
            style-type: ComponentStyle;
        }
        
        #comp-ljpoeu3c {
            height: auto;
            hidden: false;
            max-height: 99999px;
            max-width: 99999px;
            min-height: 0px;
            min-width: 0px;
            component-layout: ComponentLayout;
            width: 268px;
            flex-direction: column;
            container-layout: StackContainerLayout;
            align-self: center;
            grid-column-end: 2;
            grid-column-start: 1;
            grid-row-end: 2;
            grid-row-start: 1;
            justify-self: center;
            item-margin-bottom: 0%;
            item-margin-left: 0px;
            item-margin-right: 0%;
            item-margin-top: 0%;
            item-layout: GridItemLayout;
            layout-spx-refWidth: 1280;
            layout-spx-resolverType: "scale";
            layout-type: SingleLayoutData;
            comp-id: ;
            class-name: mobile.core.components.Container;
            page-id: ;
            skin: wysiwyg.viewer.skins.area.DefaultAreaSkin;
            spx-ref-width: 1280;
            spx-resolver-type: scale;
            background: rgba(var(--color_15),0);
            border-color: rgba(initial,0);
            border-width: 0px;
            border-radius: 0px;
            box-shadow: disabled(0px 0px 0px 0px rgba(0,0,0,0.6));
            style-type: ComponentStyle;
        }
        
        #comp-lk9qff7o {
            height: 46px;
            hidden: false;
            max-height: 99999px;
            max-width: 99999px;
            min-height: 0px;
            min-width: 0px;
            component-layout: ComponentLayout;
            width: 268px;
            align-self: end;
            grid-column-end: 2;
            grid-column-start: 1;
            grid-row-end: 2;
            grid-row-start: 1;
            justify-self: center;
            item-margin-bottom: 7.921142578125%;
            item-margin-left: 0%;
            item-margin-right: 0%;
            item-margin-top: 0%;
            item-layout: GridItemLayout;
            layout-spx-refWidth: 390;
            layout-spx-resolverType: "scale";
            layout-type: SingleLayoutData;
            comp-id: ;
            class-name: wixui.StylableButton;
            page-id: ;
            skin: wixui.skins.Skinless;
            spx-ref-width: 1280;
            spx-resolver-type: scale;
            style-style-$st_css-value: ":import{-st-from: 'wix-ui-santa/index.st.css'\;-st-named: StylableButton}.root{-st-extends: StylableButton\;transition: all 0.2s ease, visibility 0s\;border-radius: 50px\;padding-right: 8px\;background: rgba(0, 0, 0, 0)}.root:hover {\\n    background: rgba(255, 255, 255, 0.02)\;\\n    border: 0px solid value(site_1_5)\;\\n}.root:hover::icon {\\n    transform: rotate(0deg)\;\\n    fill: value(site_1_1)\;}.root:hover::label {\\n    color: value(site_1_1)\;\\n    -st-mixin: font_8\;\\n    font-size: 16px\;\\n    font-weight: 700\;\\n}.root:disabled{background: #E2E2E2}.root:disabled::label{color: #8F8F8F}.root:disabled::icon{fill: #8F8F8F}.root::container{transition: inherit\;flex-direction: row\;justify-content: flex-start\;align-items: center}.root::label{transition: inherit\;display: inherited\;margin: 0px 0px 0px 4px\;color: value(site_1_1)\;text-transform: uppercase\;margin-left: 0px\;font-family: avenir-lt-w01_35-light1475496,avenir-lt-w05_35-light,sans-serif\;-st-mixin: font_8\;font-size: 16px\;margin-right: 10px\;letter-spacing: 0.25em}.root::icon{transition: inherit\;display: inherited\;margin: 0px 4px 0px 0px\;fill: value(site_1_1)\;margin-right: 0px\;width: 65px\;height: 65px\;margin-left: 10px}";
            style-type: ComponentStyle;
        }
        
        #comp-lkogdnos {
            background-align-type: center;
            background-color-overlay: ;
            background-color-overlay-opacity: 0;
            background-fitting-type: fill;
            background-media-ref: {"adaptiveVideo":[{"format":"hls","url":"site/media/video/c837a6_5b496defe16846849a41b41d96c0f88f/9440e606-c348-48bf-97d5-45152eb1d9a2/repackage/hls"}],"artist":{"id":"","name":""},"duration":16,"fps":"30/1","generatedPosters":["c837a6_5b496defe16846849a41b41d96c0f88ff000.jpg","c837a6_5b496defe16846849a41b41d96c0f88ff001.jpg","c837a6_5b496defe16846849a41b41d96c0f88ff002.jpg","c837a6_5b496defe16846849a41b41d96c0f88ff003.jpg"],"hasAudio":false,"loop":true,"mute":true,"opacity":1,"posterImageRef":{"height":1080,"type":"Image","uri":"c837a6_5b496defe16846849a41b41d96c0f88ff000.jpg","width":1920},"preload":"auto","qualities":[{"height":1080,"quality":"1080p","url":"video/c837a6_5b496defe16846849a41b41d96c0f88f/1080p/mp4/file.mp4","width":1920},{"height":720,"quality":"720p","url":"video/c837a6_5b496defe16846849a41b41d96c0f88f/720p/mp4/file.mp4","width":1280},{"height":480,"quality":"480p","url":"video/c837a6_5b496defe16846849a41b41d96c0f88f/480p/mp4/file.mp4","width":854},{"height":360,"quality":"360p","url":"video/c837a6_5b496defe16846849a41b41d96c0f88f/360p/mp4/file.mp4","width":640},{"height":144,"quality":"storyboard","url":"video/c837a6_5b496defe16846849a41b41d96c0f88f/storyboard/144p/mp4/file.mp4","width":256}],"title":"Final 2.mp4","type":"WixVideo","videoId":"c837a6_5b496defe16846849a41b41d96c0f88f"};
            design-background-type: "BackgroundMedia";
            charas: design-lkogdsoj;
            design-type: MediaPlayerDesignData;
            height: auto;
            hidden: false;
            max-height: 99999px;
            max-width: 99999px;
            min-height: 0px;
            min-width: 0px;
            component-layout: ComponentLayout;
            width: auto;
            column-gap: 0spx;
            grid-template-columns: 1fr;
            row-gap: 0spx;
            grid-template-rows: 1fr;
            container-layout: GridContainerLayout;
            align-self: stretch;
            grid-column-end: 2;
            grid-column-start: 1;
            grid-row-end: 2;
            grid-row-start: 1;
            justify-self: stretch;
            item-margin-bottom: 0%;
            item-margin-left: 0%;
            item-margin-right: 0%;
            item-margin-top: 0%;
            item-layout: GridItemLayout;
            layout-spx-refWidth: 1280;
            layout-spx-resolverType: "scale";
            layout-type: SingleLayoutData;
            class-name: wysiwyg.viewer.components.MediaPlayer;
            skin: wysiwyg.viewer.skins.mediaPlayerSkin;
            style-type: ComponentStyle;
            transformations-opacity: 1;
            transformations-rotate: 0;
            transformations-scale-x: 1;
            transformations-scale-y: 1;
            transformations-skew-x: 0;
            transformations-skew-y: 0;
            transformations-translate-x-type: "px";
            transformations-translate-x-value: 0;
            transformations-translate-y-type: "px";
            transformations-translate-y-value: 0;
            transformations-type: "TransformData";
        }
        
        #comp-lkogdnp1 {
            design-icons: [{"name":"playButton","svgId":"0da768_661bc0cafffa432db3753ad5d17e4f10.svg","type":"ControlIconDesignData"}];
            design-iconsDefaultDesign-overrideColors-color1: "color_15";
            design-iconsDefaultDesign-shapeStyle-enableStroke: false;
            design-iconsDefaultDesign-shapeStyle-opacity: 1;
            design-iconsDefaultDesign-shapeStyle-stroke: "#000000";
            design-iconsDefaultDesign-shapeStyle-strokeOpacity: 1;
            design-iconsDefaultDesign-shapeStyle-strokeWidth: 1;
            design-iconsDefaultDesign-type: "VectorImageDesignData";
          design-type: "MediaControlsDesignData";
          height: 100px;
          hidden: false;
          max-width: 99999px;
          min-width: 0px;
          component-layout: ComponentLayout;
          width: 100px;
          align-self: center;
          grid-column-end: 2;
          grid-column-start: 1;
          grid-row-end: 2;
          grid-row-start: 1;
          justify-self: center;
          item-margin-left: 0%;
          item-margin-top: 0px;
          item-layout: GridItemLayout;
          layout-spx-refWidth: 1280;
          layout-spx-resolverType: "scale";
          layout-type: SingleLayoutData;
          comp-id: ;
          class-name: wysiwyg.viewer.components.MediaOverlayControls;
          page-id: ;
          skin: skins.viewer.mediaOverlayControlsDefaultSkin;
          style-type: ComponentStyle;
          transformations-rotate: 0;
          transformations-type: "TransformData";
        }
      
        #comp-lkogdnp72 {
          design-icons: [{"name":"volumeOn","svgId":"0da768_4026746ebab74627a513aa0df1511dea.svg","type":"ControlIconDesignData"},{"name":"volumeOff","svgId":"0da768_c6d2d796452644a6a4a243c3afb7b781.svg","type":"ControlIconDesignData"},{"iconDesign":{"overrideColors":{"color1":"#a9a9a9"},"type":"VectorImageDesignData"},"name":"noAudio","svgId":"0da768_c6d2d796452644a6a4a243c3afb7b781.svg","type":"ControlIconDesignData"}];
          design-iconsDefaultDesign-overrideColors-color1: "#ffffff";
          design-iconsDefaultDesign-shapeStyle-enableStroke: false;
          design-iconsDefaultDesign-shapeStyle-opacity: 1;
          design-iconsDefaultDesign-shapeStyle-stroke: "#000000";
          design-iconsDefaultDesign-shapeStyle-strokeOpacity: 1;
          design-iconsDefaultDesign-shapeStyle-strokeWidth: 1;
          design-iconsDefaultDesign-type: "VectorImageDesignData";
          design-type: "MediaControlsDesignData";
          height: 44px;
          hidden: false;
          component-layout: ComponentLayout;
          width: auto;
          align-self: end;
          grid-column-end: 2;
          grid-column-start: 1;
          grid-row-end: 2;
          grid-row-start: 1;
          justify-self: end;
          item-margin-bottom: 2px;
          item-margin-left: 2px;
          item-margin-right: 2px;
          item-layout: GridItemLayout;
          layout-spx-refWidth: 1280;
          layout-spx-resolverType: "scale";
          layout-type: SingleLayoutData;
          comp-id: ;
          class-name: wysiwyg.viewer.components.MediaControls;
          page-id: ;
          skin: skins.viewer.mediaControlsLightSkin;
          style-style-disabledcolor-value: "#777";
          style-style-maincolor-value: "#fff";
          style-style-progresscolor-value: "#1fdf67";
          style-type: ComponentStyle;
          transformations-rotate: 0;
          transformations-type: "TransformData";
        }
      
      }
      
      @media (max-width: 1000px) and (canvas-size: 768px) {
        #c1dmp {
          grid-template-columns: minmax(0px,1fr);
          grid-template-rows: auto;
          container-layout: GridContainerLayout;
          layout-spx-refWidth: 390;
          layout-spx-resolverType: "scale";
          layout-type: SingleLayoutData;
        }
      
        #comp-kbgaghri {
          height: auto;
          hidden: false;
          max-height: 99999px;
          max-width: 99999px;
          min-height: 100vh;
          min-width: 0px;
          component-layout: ComponentLayout;
          column-gap: 0px;
          grid-template-columns: minmax(0px,1fr);
          row-gap: 0px;
          grid-template-rows: minmax(maxContent,100%);
          container-layout: GridContainerLayout;
          align-self: stretch;
          grid-column-end: 2;
          grid-column-start: 1;
          grid-row-end: 2;
          grid-row-start: 1;
          justify-self: stretch;
          item-layout: GridItemLayout;
          layout-spx-refWidth: 768;
          layout-spx-resolverType: "scale";
          layout-type: SingleLayoutData;
          comp-id: ;
          class-name: responsive.components.Section;
          page-id: ;
          skin: wysiwyg.viewer.skins.area.RectangleArea;
          spx-ref-width: 768;
          spx-resolver-type: scale;
          background: rgba(var(--color_11),0);
          style-type: ComponentStyle;
        }
      
        #comp-kd5px9q0 {
          hidden: false;
          component-layout: ComponentLayout;
          align-self: stretch;
          justify-self: end;
          item-margin-bottom: 0px;
          item-margin-left: 0px;
          item-margin-right: 0px;
          item-margin-top: 0px;
          item-layout: FixedItemLayout;
          layout-type: SingleLayoutData;
        }
      
        #comp-ljpo9v9q {
          height: auto;
          hidden: false;
          max-height: 99999px;
          max-width: 99999px;
          min-height: 0px;
          min-width: 0px;
          component-layout: ComponentLayout;
          width: 268px;
          layout-spx-refWidth: 768;
          layout-spx-resolverType: "scale";
          layout-type: SingleLayoutData;
          comp-id: ;
          class-name: wysiwyg.viewer.components.WRichText;
          page-id: ;
          skin: wysiwyg.viewer.skins.WRichTextNewSkin;
          spx-ref-width: 768;
          spx-resolver-type: scale;
          color: rgb(255,255,255);
          font-size: 60px;
          font-weight: bold;
          letter-spacing: 0.4em;
          line-height: 1.1em;
          text-align: left;
          text-decoration: none;
          style-type: ComponentStyle;
        }
      
        #comp-ljpoeu3c {
          height: auto;
          hidden: false;
          max-height: 99999px;
          max-width: 99999px;
          min-height: 0px;
          min-width: 0px;
          component-layout: ComponentLayout;
          width: 268px;
          align-self: center;
          grid-column-end: 2;
          grid-column-start: 1;
          grid-row-end: 2;
          grid-row-start: 1;
          justify-self: center;
          item-margin-bottom: 0%;
          item-margin-left: 0px;
          item-margin-right: 0%;
          item-margin-top: 0%;
          item-layout: GridItemLayout;
          layout-spx-refWidth: 1280;
          layout-spx-resolverType: "scale";
          layout-type: SingleLayoutData;
          comp-id: ;
          class-name: mobile.core.components.Container;
          page-id: ;
          skin: wysiwyg.viewer.skins.area.DefaultAreaSkin;
          spx-ref-width: 768;
          spx-resolver-type: scale;
          background: rgba(var(--color_15),0);
          border-color: rgba(initial,0);
          border-width: 0px;
          border-radius: 0px;
          box-shadow: disabled(0px 0px 0px 0px rgba(0,0,0,0.6));
          style-type: ComponentStyle;
        }
      
        #comp-lk9qff7o {
          align-self: end;
          grid-column-end: 2;
          grid-column-start: 1;
          grid-row-end: 2;
          grid-row-start: 1;
          justify-self: center;
          item-margin-bottom: 7.920328776041667%;
          item-margin-left: 0%;
          item-margin-right: 0%;
          item-margin-top: 0%;
          item-layout: GridItemLayout;
          layout-spx-refWidth: 390;
          layout-spx-resolverType: "scale";
          layout-type: SingleLayoutData;
          comp-id: ;
          class-name: wixui.StylableButton;
          page-id: ;
          skin: wixui.skins.Skinless;
          spx-ref-width: 1280;
          spx-resolver-type: scale;
          style-style-$st_css-value: ":import {\\n    -st-from: 'wix-ui-santa/index.st.css'\;\\n    -st-named: StylableButton\;\\n}\\n.root{\\n    -st-extends: StylableButton\;\\n}";
          style-type: ComponentStyle;
        }
      
      }
      
      @media (max-width: 750px) and (canvas-size: 390px) {
        #c1dmp {
          grid-template-columns: minmax(0px,1fr);
          grid-template-rows: auto;
          container-layout: GridContainerLayout;
          layout-spx-refWidth: 390;
          layout-spx-resolverType: "scale";
          layout-type: SingleLayoutData;
        }
      
        #comp-kbgaghri {
          height: auto;
          hidden: false;
          max-height: 99999px;
          max-width: 99999px;
          min-height: 100vh;
          min-width: 0px;
          component-layout: ComponentLayout;
          align-self: stretch;
          grid-column-end: 2;
          grid-column-start: 1;
          grid-row-end: 2;
          grid-row-start: 1;
          justify-self: stretch;
          item-layout: GridItemLayout;
          layout-spx-refWidth: 390;
          layout-spx-resolverType: "scale";
          layout-type: SingleLayoutData;
        }
      
        #comp-kd5px9q0 {
          hidden: false;
          component-layout: ComponentLayout;
          align-self: stretch;
          justify-self: stretch;
          item-margin-bottom: 0px;
          item-margin-left: 0%;
          item-margin-right: 0px;
          item-margin-top: 0px;
          item-layout: FixedItemLayout;
          layout-type: SingleLayoutData;
        }
      
        #comp-ljpo9v9q {
          height: auto;
          hidden: false;
          max-height: 99999px;
          max-width: 99999px;
          min-height: 0px;
          min-width: 0px;
          component-layout: ComponentLayout;
          width: 207.5px;
          align-self: start;
          item-margin-bottom: 4.819277108433735%;
          item-margin-left: 0%;
          item-margin-right: 0%;
          item-margin-top: 0px;
          item-layout: StackItemLayout;
          layout-spx-refWidth: 390;
          layout-spx-resolverType: "scale";
          layout-type: SingleLayoutData;
          comp-id: ;
          class-name: wysiwyg.viewer.components.WRichText;
          page-id: ;
          skin: wysiwyg.viewer.skins.WRichTextNewSkin;
          spx-ref-width: 390;
          spx-resolver-type: scale;
          color: rgb(255,255,255);
          font-size: 42px;
          font-weight: bold;
          letter-spacing: 0.4em;
          line-height: 1.1em;
          text-align: left;
          text-decoration: none;
          style-type: ComponentStyle;
        }
      
        #comp-ljpobc0m {
          height: auto;
          hidden: false;
          max-width: 99999px;
          min-width: 0px;
          component-layout: ComponentLayout;
          width: 207.5px;
          layout-spx-refWidth: 390;
          layout-spx-resolverType: "scale";
          layout-type: SingleLayoutData;
        }
      
        #comp-ljpoeu3c {
          height: auto;
          hidden: false;
          max-height: 99999px;
          max-width: 99999px;
          min-height: 0px;
          min-width: 0px;
          component-layout: ComponentLayout;
          width: 207.5px;
          align-self: center;
          grid-column-end: 2;
          grid-column-start: 1;
          grid-row-end: 2;
          grid-row-start: 1;
          justify-self: center;
          item-margin-bottom: 0%;
          item-margin-left: 0%;
          item-margin-right: 0%;
          item-margin-top: 0%;
          item-layout: GridItemLayout;
          layout-spx-refWidth: 1280;
          layout-spx-resolverType: "scale";
          layout-type: SingleLayoutData;
        }
      
        #comp-lk9qff7o {
          height: 46px;
          hidden: false;
          max-height: 99999px;
          max-width: 99999px;
          min-height: 0px;
          min-width: 0px;
          component-layout: ComponentLayout;
          width: 208px;
          align-self: end;
          grid-column-end: 2;
          grid-column-start: 1;
          grid-row-end: 2;
          grid-row-start: 1;
          justify-self: center;
          item-margin-bottom: 30%;
          item-margin-left: 0%;
          item-margin-right: 0%;
          item-margin-top: 0%;
          item-layout: GridItemLayout;
          layout-spx-refWidth: 390;
          layout-spx-resolverType: "scale";
          layout-type: SingleLayoutData;
          comp-id: ;
          class-name: wixui.StylableButton;
          page-id: ;
          skin: wixui.skins.Skinless;
          spx-ref-width: 1280;
          spx-resolver-type: scale;
          style-style-$st_css-value: ":import {\\n    -st-from: 'wix-ui-santa/index.st.css'\;\\n    -st-named: StylableButton\;\\n}\\n.root{\\n    -st-extends: StylableButton\;\\n}";
          style-type: ComponentStyle;
        }
      
      }
      `,
    'data.json5': `{
        externalRefs: {
          'comp-kd5px9hr': 'comp-kd5px9hr',
          tlij8: 'tlij8',
          'variants-ljclok931': 'variants-ljclok931',
          'variants-ljclok932': 'variants-ljclok932',
        },
        components: {
          c1dmp: {
            behaviors: {
              items: '[]',
              type: 'ObsoleteBehaviorsList',
            },
            data: {
              advancedSeoData: '{"tags":[]}',
              descriptionSEO: '',
              hidePage: false,
              hideTitle: true,
              icon: '',
              id: 'c1dmp',
              ignoreBottomBottomAnchors: true,
              metaKeywordsSEO: '',
              ogImage: '',
              pageBackgrounds: {
                desktop: {
                  custom: true,
                  isPreset: true,
                  ref: {
                    alignType: 'top',
                    color: '{color_11}',
                    fittingType: 'fill',
                    scrollType: 'fixed',
                    type: 'BackgroundMedia',
                  },
                },
                mobile: {
                  custom: true,
                  isPreset: true,
                  mediaSizing: 'viewport',
                  ref: {
                    alignType: 'top',
                    color: '{color_11}',
                    colorOverlay: '',
                    colorOverlayOpacity: 0,
                    fittingType: 'fill',
                    scrollType: 'fixed',
                    type: 'BackgroundMedia',
                  },
                },
              },
              pageSecurity: {
                requireLogin: false,
              },
              pageTitleSEO: '',
              pageUriSEO: 'intro',
              title: 'INTRO',
              tpaApplicationId: 0,
              translationData: {
                uriSEOTranslated: false,
              },
              type: 'Page',
              underConstruction: false,
            },
            structure: {
              skin: 'wysiwyg.viewer.skins.page.TransparentPageSkin',
            },
          },
          'comp-kbgaghri': {
            structure: {
              skin: 'wysiwyg.viewer.skins.area.RectangleArea',
            },
          },
          'comp-kd5px9q0': {
            data: {
              rootCompId: 'comp-kd5px9hr',
              type: 'InternalRef',
            },
            structure: {
              skin: 'wysiwyg.viewer.skins.ResponsiveContainerRefSkin',
            },
          },
          'comp-ljpo9v9q': {
            data: {
              linkList: [],
              stylesMapId: 'CK_EDITOR_PARAGRAPH_STYLES',
              type: 'StyledText',
            },
            props: {
              packed: true,
              type: 'WRichTextProperties',
            },
            structure: {
              skin: 'wysiwyg.viewer.skins.WRichTextNewSkin',
            },
          },
          'comp-ljpobc0m': {
            data: {
              linkList: [],
              stylesMapId: 'CK_EDITOR_PARAGRAPH_STYLES',
              type: 'StyledText',
            },
            props: {
              packed: true,
              type: 'WRichTextProperties',
            },
            structure: {
              skin: 'wysiwyg.viewer.skins.WRichTextNewSkin',
            },
          },
          'comp-ljpoeu3c': {
            structure: {
              skin: 'wysiwyg.viewer.skins.area.DefaultAreaSkin',
            },
          },
          'comp-lk9qff7o': {
            data: {
              svgId: '6eea42305e4348869bdaf7b2d13b1bb5.svg',
              type: 'StylableButton',
            },
            props: {
              type: 'StylableButtonProperties',
            },
            structure: {
              skin: 'wixui.skins.Skinless',
            },
          },
          'comp-lkogdnos': {
            props: {
              autoplay: true,
              loop: true,
              mute: true,
              type: 'MediaPlayerProperties',
            },
            structure: {
              skin: 'wysiwyg.viewer.skins.mediaPlayerSkin',
            },
          },
          'comp-lkogdnp1': {
            props: {
              playerId: 'comp-lkogdnos',
              type: 'MediaOverlayControlsProperties',
            },
            structure: {
              skin: 'skins.viewer.mediaOverlayControlsDefaultSkin',
            },
          },
          'comp-lkogdnp72': {
            props: {
              playerId: 'comp-lkogdnos',
              showStoryboard: 'none',
              type: 'MediaControlsProperties',
            },
            structure: {
              skin: 'skins.viewer.mediaControlsLightSkin',
            },
          },
        },
        collections: {},
        version: '0.0.16',
      }`
}
const pageToWml: Record<string, WMLFiles> = {
    c1dmp: wmlSite
}

const siteInfo: SiteData = {id: siteId, msid, wml: {masterPage: {} as WMLFiles, pages: pageToWml, permanentData: {} as WMLFiles}}
export {siteInfo,token}
