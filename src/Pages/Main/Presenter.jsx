import { memo } from 'react';
import { Container } from 'reactstrap';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { YouTube } from '../../Components/FontAwesome';

const Scroll = AnimationOnScroll;

const Presenter = memo(({ onClickMore, onClickYoutube }) => {
    return (
        <>
            <section className="section section-top">
                <Container>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="section-textbox">
                                <Scroll animateIn="animate__fadeInUp">
                                    <h3>
                                        <strong className="tertiary">아기</strong>를 보는 모든 순간 함께 보는 <strong className="tertiary">즐거움!</strong>
                                    </h3>
                                </Scroll>
                                <Scroll animateIn="animate__fadeInUp">
                                    <p>임신∙출산∙육아 전문 서비스 아이보리</p>
                                </Scroll>
                                <div className="link-box">
                                    <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.namyang.bebe&hl=ko">
                                        <img src="/img/goto_googleplay.png" alt="구글플레이 다운로드" />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://apps.apple.com/kr/app/id1113295590">
                                        <img src="/img/goto_AppStore.png" alt="앱스토어 다운로드" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="section-imgbox">
                                <Scroll animateIn="animate__slideInRight">
                                    <img src="/img/section-img-01.png" alt="섹션 이미지" />
                                </Scroll>
                            </div>
                        </div>
                    </div>
                    <img src="/img/ivory.png" alt="아이보리" className="section-top-logo" />
                </Container>
            </section>

            <section className="section">
                <Container>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-textbox">
                                <Scroll animateIn="animate__fadeInUp">
                                    <h3>About</h3>
                                </Scroll>
                                <Scroll animateIn="animate__fadeInUp">
                                    <p>
                                        아이보리는 국내 최대 산후조리원 아기영상서비스 “베베캠” 을 통해 산모와 가족들에게 미디어 영상 교감서비스를 제공하고 있으며, 엄마들의 리얼체험 · 정보공유 ·
                                        육아공감 · 육아혜택을 통한 함.께.육.아 서비스를 만들어 갑니다
                                    </p>
                                </Scroll>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="section bg-white">
                <Container>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-textbox">
                                <Scroll animateIn="animate__fadeInUp">
                                    <h3>대한민국 1등! 신생아 영상 서비스</h3>
                                </Scroll>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="column-item center">
                                            <Scroll animateIn="animate__fadeInUp">
                                                <img src="/img/illust-temp.png" alt="temp" />
                                            </Scroll>
                                            <Scroll animateIn="animate__fadeInUp">
                                                <div className="column-item-title">450,000+</div>
                                            </Scroll>
                                            <Scroll animateIn="animate__fadeInUp">
                                                <p>앱 다운로드</p>
                                            </Scroll>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="column-item center">
                                            <Scroll animateIn="animate__fadeInUp">
                                                <img src="/img/illust-temp.png" alt="temp" />
                                            </Scroll>
                                            <Scroll animateIn="animate__fadeInUp">
                                                <div className="column-item-title">40%</div>
                                            </Scroll>
                                            <Scroll animateIn="animate__fadeInUp">
                                                <p>산후조리원 시장점유율</p>
                                            </Scroll>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="column-item center">
                                            <Scroll animateIn="animate__fadeInUp">
                                                <img src="/img/illust-temp.png" alt="temp" />
                                            </Scroll>
                                            <Scroll animateIn="animate__fadeInUp">
                                                <div className="column-item-title">8회</div>
                                            </Scroll>
                                            <Scroll animateIn="animate__fadeInUp">
                                                <p>사용자 일 평균 방문 수</p>
                                            </Scroll>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="column-item center">
                                            <Scroll animateIn="animate__fadeInUp">
                                                <img src="/img/illust-temp.png" alt="temp" />
                                            </Scroll>
                                            <Scroll animateIn="animate__fadeInUp">
                                                <div className="column-item-title">190 개소</div>
                                            </Scroll>
                                            <Scroll animateIn="animate__fadeInUp">
                                                <p>제휴 산후조리원</p>
                                            </Scroll>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="column-item center">
                                            <Scroll animateIn="animate__fadeInUp">
                                                <img src="/img/illust-temp.png" alt="temp" />
                                            </Scroll>
                                            <Scroll animateIn="animate__fadeInUp">
                                                <div className="column-item-title">42,000+</div>
                                            </Scroll>
                                            <Scroll animateIn="animate__fadeInUp">
                                                <p>MAU</p>
                                            </Scroll>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="column-item center">
                                            <Scroll animateIn="animate__fadeInUp">
                                                <img src="/img/illust-temp.png" alt="temp" />
                                            </Scroll>
                                            <Scroll animateIn="animate__fadeInUp">
                                                <div className="column-item-title">4,150대</div>
                                            </Scroll>
                                            <Scroll animateIn="animate__fadeInUp">
                                                <p>산후조리원 운영 캠 수</p>
                                            </Scroll>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-small-text">2021.04 기준</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="section bg_second pattern-01">
                <Container>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="section-textbox">
                                <Scroll animateIn="animate__fadeInUp">
                                    <img src="/img/logo-bebecam.png" className="section-logo" alt="베베캠 로고" />
                                    <h3>아이보리 베베캠</h3>
                                </Scroll>
                                <Scroll animateIn="animate__fadeInUp">
                                    <p>언제 어디서든 산후조리원에 있는 우리 아기를 실시간 라이브 영상으로 만날 수 있어요</p>
                                </Scroll>
                                <Scroll animateIn="animate__fadeInUp">
                                    <div className="button-group">
                                        <button className="btn btn-block" onClick={() => onClickMore('bebecam')}>
                                            READ MORE
                                        </button>
                                        <button className="btn btn-block btn-secondary-dark" onClick={() => onClickYoutube()}>
                                            <YouTube /> 베베캠 서비스 영상보기
                                        </button>
                                    </div>
                                </Scroll>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="section-imgbox">
                                <Scroll animateIn="animate__slideInRight">
                                    <img src="/img/section-img-02.png" alt="섹션 이미지" style={{ marginTop: '-25%', marginBottom: '-40%' }} />
                                </Scroll>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
});

export default Presenter;
