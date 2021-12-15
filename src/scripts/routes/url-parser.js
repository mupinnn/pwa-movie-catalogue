const URLParser = {
  parseActiveURLWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splittedUrl = this.URLSplitter(url);
    return this.URLCombiner(splittedUrl);
  },

  parseActiveURLWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this.URLSplitter(url);
  },

  URLSplitter(url) {
    const splittedURL = url.split('/');
    return {
      resource: splittedURL[1] || null,
      id: splittedURL[2] || null,
      verb: splittedURL[3] || null,
    };
  },

  URLCombiner(splittedURL) {
    return (
      (splittedURL.resource ? `/${splittedURL.resource}` : '/') +
      (splittedURL.id ? '/:id' : '') +
      (splittedURL.verb ? `/${splittedURL.verb}` : '')
    );
  },
};

export default URLParser;
