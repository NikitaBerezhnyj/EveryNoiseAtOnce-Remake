import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div
          style={{
            width: "800px",
            marginTop: "32px",
            color: "gray",
            clear: "both",
          }}
        >
          <p>
            <span style={{ fontWeight: "bolder" }}>
              Original web resources:
            </span>
            <br />
            Original web site:{" "}
            <a
              href="https://everynoise.com/"
              target="_blank"
              title="original web site"
            >
              https://everynoise.com
            </a>
            <br />
            Author contacts:{" "}
            <a
              href="https://twitter.com/everynoise"
              title="original author twitter"
              target="_blank"
            >
              @EveryNoise
            </a>{" "}
            &middot;{" "}
            <a
              href="http://furia.com"
              title="original author blog"
              target="_blank"
            >
              Glenn McDonald
            </a>
          </p>
        </div>
        <div>
          <p>
            <span style={{ fontWeight: "bolder" }}>
              Redesigned by Nikita Berezhnyj:
            </span>
            <br />
            This redesign is a non-commercial project and is not intended for
            monetization. It draws inspiration from the original web resources
            created by{" "}
            <a
              href="https://twitter.com/everynoise"
              title="original author twitter"
              target="_blank"
            >
              @EveryNoise
            </a>
            {" · "}
            <a
              href="http://furia.com"
              title="original author blog"
              target="_blank"
            >
              Glenn McDonald
            </a>
            .
            <br />
            Due to limited access to the original content, this site represents
            a curated and shortened version of the original web resource.
          </p>
        </div>
      </div>
    </footer>
  );
}
