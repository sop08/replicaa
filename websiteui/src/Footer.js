function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-info">
        <ul className="footer-list">
          <li className="footer-item">
            <a
              class="footer-link"
              href="https://about.lezhin.com/en"
              target="_blank"
              rel="noopener noreferrer"
              title="Open in new window"
              data-ga-on="click"
              data-event-label="회사소개"
            >
              About Lezhin
            </a>
          </li>
          <li className="footer-item">
            <a
              class="footer-link"
              target="_blank"
              title="Open in new window"
              data-ga-on="click"
              data-ga-event-label="이용약관"
              href="https://www.lezhinus.com/en/policy/terms"
            >
              Terms of Use
            </a>
          </li>
          <li className="footer-item">
            <a
              class="footer-link"
              target="_blank"
              title="Open in new window"
              data-ga-on="click"
              data-ga-event-label="개인정보처리방침"
              href="https://www.lezhinus.com/en/policy/privacy"
            >
              Privacy Policy
            </a>
          </li>
          <li className="footer-item">
            <a
              class="footer-link"
              data-ga-on="click"
              data-ga-event-label="고객센터"
              href="https://www.lezhinus.com/en/help"
            >
              Customer Support
            </a>
          </li>
          <li className="footer-item">
            <a
              id="ask-serial"
              class="footer-link"
              aria-haspopup="true"
              aria-controls="popup-ask-serial"
              href="#popup-ask-serial"
              data-ga-on="click"
              data-ga-event-label="연재문의"
            >
              Submission
            </a>
          </li>
        </ul>

        <div class="footer-address" tabindex="0">
          <input
            id="footer-check-address"
            class="footer-check"
            type="checkbox"
          />
          <label
            for="footer-check-address"
            class="footer__label footer__label--1"
          >
            Lezhin Entertainment, LLC
          </label>
          <i></i>
          <a
            href="mailto:contact@lezhin.com"
            data-ga-on="click"
            data-ga-event-label="contact@lezhin.com"
          >
            Contact Us : contact@lezhin.com
          </a>
        </div>
        <div class="footer-copyright">
          <input
            id="footer-check-copyright"
            class="footer-check"
            type="checkbox"
          />
          <label
            for="footer-check-copyright"
            class="footer__label footer__label--2"
          >
            All titles published by Lezhin Comics are protected by copyright.
          </label>
          <div class="footer__foldable footer__foldable--2">
            {" "}
            Posting all or any part of our titles on other media (including
            personal media) without authorization from the copyright holder or
            Lezhin Comics is punishable by copyright laws. Features and
            available titles may differ for the language/country you have
            selected.
          </div>
        </div>
        <div class="footer__social">
          <a
            class="footer__sns footer__sns--insta"
            target="_blank"
            rel="noopener noreferrer"
            title="Open in new window"
            data-ga-on="click"
            data-ga-event-label="인스타그램"
            href="https://www.instagram.com/lezhincomics.us/"
          >
            Instagram
          </a>
          <a
            class="footer__sns footer__sns--twitter"
            target="_blank"
            rel="noopener noreferrer"
            title="Open in new window"
            data-ga-on="click"
            data-ga-event-label="트위터"
            href="https://twitter.com/LezhinComics_US"
          >
            Twitter
          </a>
          <a
            class="footer__sns footer__sns--facebook"
            target="_blank"
            rel="noopener noreferrer"
            title="Open in new window"
            data-ga-on="click"
            data-ga-event-label="페이스북"
            href="https://www.facebook.com/lzhncomics"
          >
            Facebook
          </a>
          <a
            class="footer__sns footer__sns--desktop footer__sns--youtube"
            target="_blank"
            rel="noopener noreferrer"
            title="Open in new window"
            data-ga-on="click"
            data-ga-event-label="유튜브"
            href="https://www.youtube.com/@LezhinComicsUS"
          >
            Youtube
          </a>
          <a
            class="footer__sns footer__sns--mobile footer__sns--youtube"
            target="_blank"
            rel="noopener noreferrer"
            title="Open in new window"
            data-ga-on="click"
            data-ga-event-label="유튜브"
            href="https://m.youtube.com/@LezhinComicsUS"
          >
            Youtube
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
