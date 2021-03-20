export interface WebsiteConfig {
  title: string
  description: string
  coverImage?: string
  logo: string
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string
  /**
   * full url, no username
   */
  facebook?: string
  /**
   * full url, no username
   */
  twitter?: string
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  substackLink?: string

  googleSiteVerification?: string
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string
}

const config: WebsiteConfig = {
  title: 'The Wooley Way',
  description: 'The Wooley Way',
  coverImage: 'img/blog-cover.png',
  logo: 'img/logo-white.png',
  lang: 'en',
  siteUrl: 'https://thewooleyway.com',
  twitter: 'https://twitter.com/ericwooley',
  showSubscribe: true,
  substackLink: 'https://thewooleyway.substack.com/',
  googleSiteVerification: 'GoogleCode',
  // footer: 'is based on Gatsby Casper',
}

export default config
