<template>
  <section class="usa-banner" aria-label="Official government website">
    <div class="usa-accordion">
      <header class="usa-banner__header">
        <div class="usa-banner__inner">
          <div class="grid-col-auto">
            <img class="usa-banner__header-flag" :src="iconUsFlagSmall" alt="U.S. flag" />
          </div>
          <div class="grid-col-fill tablet:grid-col-auto">
            <p class="usa-banner__header-text">
              An official website of the United States government
            </p>
            <p class="usa-banner__header-action" aria-hidden="true">
              Here’s how you know
            </p>
          </div>
          <button class="usa-accordion__button usa-banner__button" aria-expanded="false" aria-controls="gov-banner">
            <span class="usa-banner__button-text">Here’s how you know</span>
          </button>
        </div>
      </header>
      <div class="usa-banner__content usa-accordion__content" id="gov-banner" hidden>
        <div class="grid-row grid-gap-lg">
          <div class="usa-banner__guidance tablet:grid-col-6">
            <img class="usa-banner__icon usa-media-block__img" :src="iconDotGov" role="img" alt="" aria-hidden="true" />
            <div class="usa-media-block__body">
              <p>
                <strong>
                  Official websites use .gov
                </strong>
                <br />
                A <strong>.gov</strong> website belongs to an official government organization in the United States.
              </p>
            </div>
          </div>
          <div class="usa-banner__guidance tablet:grid-col-6">
            <img class="usa-banner__icon usa-media-block__img" :src="iconHttps" role="img" alt="" aria-hidden="true" />
            <div class="usa-media-block__body">
              <p>
                <strong>
                  Secure .gov websites use HTTPS
                </strong>
                <br />
                A <strong>lock</strong> (
                <span class="icon-lock"
                  ><img class="usa-banner__lock-image" :src="iconLock" role="img" alt="" aria-hidden="true"
                /></span>
                ) or <strong>https://</strong> means you’ve safely connected to the .gov website. Share sensitive
                information only on official, secure websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import iconHttps from 'uswds/src/img/icon-https.svg'
import iconDotGov from 'uswds/src/img/icon-dot-gov.svg'
import iconLock from 'uswds/dist/img/lock.svg'
import iconUsFlagSmall from 'uswds/src/img/us_flag_small.png'

export default {
  name: 'usa-banner',
  data() {
    return {
      iconHttps,
      iconDotGov,
      iconLock,
      iconUsFlagSmall,
    }
  },
}
</script>
