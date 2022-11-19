const team = document.querySelector('.team-section .row');

member.map((item) => {
    team.innerHTML += `
        <div class="col-3">
						<div class="card text-center shadow">
							<img class="card-img-top" src="/assets/img/t-1.png" alt="" />
							<div class="card-body">
								<h4 class="card-title">${item.name}</h4>
								<h5>${item.username}</h5>
								<p class="card-text">
									${item.bio}
								</p>

								<div class="social d-flex flex-row justify-content-center">
									<div class="flex-item mx-2">
										<a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
									</div>
									<div class="flex-item mx-2">
										<a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
									</div>
									<div class="flex-item mx-2">
										<a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>   
    `;
});