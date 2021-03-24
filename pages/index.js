import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Snow Canyon Stake</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Section 1 */}
      <div
        className="relative flex items-center content-center justify-center pt-16 pb-32"
        style={{
          minHeight: "65vh",
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('images/st-george-temple.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            className="absolute w-full h-full bg-black opacity-75"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 ml-auto mr-auto text-center lg:w-8/12">
              <div className="">
                <h1 className="text-5xl font-semibold leading-tight text-white">
                  Welcome to the St. George Utah Snow Canyon Stake
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
          style={{ height: "70px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      {/* Section 2 */}
      <section className="pb-24 -mt-24 bg-gray-300">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 pt-6 text-center md:w-8/12">
              <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <h6 className="text-2xl font-semibold">Stake Conference</h6>
                  <p className="mt-2 mb-2 text-lg text-gray-600 lg:text-xl">
                    The general session starts Sunday, March 28th at 10:00 AM
                  </p>
                  <div className="flex items-center">
                    <div className="mx-auto">
                      <a
                        className="inline-flex px-6 py-2 mt-4 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600"
                        href="https://youtu.be/uNXj5KEJdXM"
                        target="_blank"
                      >
                        English
                      </a>
                      <a
                        className="inline-flex px-6 py-2 ml-4 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600"
                        href="https://youtu.be/8I3xHGQGAoY"
                        target="_blank"
                      >
                        Español
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-12">
            {/* <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
              <h3 className="mb-2 text-3xl font-semibold leading-normal">
                Let God Prevail
              </h3>
              <h4 className="text-xl font-semibold">
                Introducing our 2021 stake theme
              </h4>
              <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-900">
                Our 2021 Snow Canyon Stake theme comes from President Nelson's
                conference address, Let God Prevail.
              </p>
              <p className="mt-0 mb-4 text-lg leading-relaxed text-gray-900">
                [More from President Olson here...]
              </p>
            </div> */}
            <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
              <h3 className="mb-2 text-3xl font-semibold leading-normal">
                From the stake presidency
              </h3>
              <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-900">
                We feel it is such a blessing to be a member of the Snow Canyon
                Stake of The Church of Jesus Christ of Latter-day Saints. A
                “stake” is a group of local Church congregations organized for
                many purposes. One of the main purposes of why the Lord
                organizes His Church into stakes is explained in Doctrine and
                Covenants 115:5-6. It says:
              </p>
              <p className="mt-0 mb-4 text-lg leading-relaxed text-gray-900">
                “Verily I say unto you all: Arise and shine forth, that thy
                light may be a standard for the nations;
              </p>
              <p className="mt-0 mb-4 text-lg leading-relaxed text-gray-900">
                “And that the gathering together upon the land of Zion, and upon
                her stakes, may be for a defense, and for a refuge from the
                storm, and from wrath when it shall be poured out without
                mixture upon the whole earth.”
              </p>
              <p className="mt-0 mb-4 text-lg leading-relaxed text-gray-900">
                President Ezra Taft Benson explained that, “The Lord…reveals
                that the stakes of Zion are to be ‘for a defense, and for a
                refuge from the storm, and from wrath when it shall be poured
                out without mixture upon the whole earth.’ Stakes are a defense
                for the Saints from enemies both seen and unseen. The defense is
                direction provided through priesthood channels that strengthens
                testimony and promotes family solidarity and individual
                righteousness” (“Strengthen Thy Stakes,” Ensign, January, 1991).
              </p>
              <p className="mt-0 mb-4 text-lg leading-relaxed text-gray-900">
                We would hope that our Snow Canyon Stake can support individuals
                and families as they strengthen their relationship with Jesus
                Christ. We hope and pray that belonging to a stake of Zion will
                allow you to both be strengthened by the faith and testimony of
                others AND provide opportunities and encouragement for you to
                strengthen others by your service and experiences.
              </p>
              <p className="mt-0 mb-4 text-lg leading-relaxed text-gray-900">
                Our stake will be strong as we prioritize our relationship with
                our Father in Heaven. And then as we let God prevail in our
                individual lives, we will then seek to strengthen members of our
                own family and also seek to serve our neighbors. We will invite
                others to Jesus Christ by participating in the fullness of
                Restored Gospel. The gospel is the “good news that Jesus Christ
                has made a perfect atonement for mankind that will redeem all
                mankind from the grave and reward each individual according to
                his/her works” (Bible Dictionary, Gospel). We share our belief
                that Jesus Christ possesses an infinite and perfect love for all
                people. We believe that each soul is of great worth and we are
                all children of Heavenly Parents. Life is challenging and we
                hope that we can support each other through difficult times as
                we become a true stake of Zion (Moses 7:18 teaches us that the
                Lord will call his people Zion if we are of one heart and one
                mind, if we dwell in righteousness and if there is no poor among
                us). This is our goal as a stake. We love and appreciate you
                all.
              </p>
              <p className="mt-0 mb-4 text-lg italic leading-relaxed text-gray-900">
                The Snow Canyon Stake Presidency
                <br></br>
                Chad Olson, Ben Squires and Brett Reynolds
              </p>
            </div>

            {/* <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
              <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-pink-600 rounded-lg shadow-lg">
                <img
                  alt="..."
                  src="./images/russell-nelson.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 block w-full"
                    style={{
                      height: "95px",
                      top: "-94px",
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    President Nelson
                  </h4>
                  <p className="my-4 font-light text-white text-md">
                    My dear brothers and sisters, as you choose to let God
                    prevail in your lives, you will experience for yourselves
                    that our God is “a God of miracles.”
                  </p>
                  <a
                    className="italic text-gray-200"
                    href="https://www.churchofjesuschrist.org/study/general-conference/2020/10/46nelson?lang=eng"
                    target="_blank"
                  >
                    Read more...
                  </a>
                </blockquote>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section className="relative py-20 lg:pt-24 lg:pb-32">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="images/st-george-temple-2.jpg"
              />
            </div>
            <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
              <div className="mt-8 lg:mt-0 md:pr-12">
                <h3 className="text-3xl font-semibold">Stake Conference</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  March 28th, 2021
                </p>
                <ul className="mt-6 list-none">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <h4 className="mb-2 text-gray-600">
                          Priesthood Leadership Session at 7:00 AM
                        </h4>
                        <p className="mt-4">
                          Will be conducted in person and via Zoom. Those
                          invited to attend will receive an email with more
                          information. Please contact the stake executive
                          secretary with any questions.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <h4 className="my-2 text-gray-600">
                          General Session at 10:00 AM
                        </h4>
                        <p>
                          Will be available via YouTube. The stream can be
                          accessed with the links below or by searching "Snow
                          Canyon Stake Conference" using Google or YouTube.
                        </p>
                        <a
                          className="inline-flex px-6 py-2 mt-4 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600"
                          href="https://youtu.be/uNXj5KEJdXM"
                          target="_blank"
                        >
                          English
                        </a>
                        <a
                          className="inline-flex px-6 py-2 ml-4 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600"
                          href="https://youtu.be/8I3xHGQGAoY"
                          target="_blank"
                        >
                          Español
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <section className="relative block pb-20 bg-gray-900">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="0 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container px-4 mx-auto lg:pt-24 lg:pb-24">
          <div className="flex flex-wrap justify-center text-center">
            <div className="w-full px-4 mt-10 lg:w-6/12 lg:mt-0">
              <h2 className="text-4xl font-semibold text-white">
                Temple Recommend Interviews
              </h2>
              <p className="mt-4 mb-4 text-xl leading-relaxed text-gray-400">
                The stake presidency conducts temple recommend interviews each
                Sunday from 2:00 - 3:30 PM at the stake offices. No appointment
                needed.
              </p>
              <h3 className="text-xl text-white ">Stake Center Address</h3>
              <p className="mt-2 text-lg text-gray-400">
                1184 N Dixie Downs Road
              </p>
              <p className="text-lg text-gray-400">St. George, UT 84770</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 5 */}
      <footer className="relative pt-8 pb-6 bg-gray-300">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container px-4 mx-auto">
          <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <span className="ml-3 text-xl">Snow Canyon Stake</span>
            </a>
            <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0">
              Questions? Contact the stake executive secretary.
            </p>
            <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start"></span>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
