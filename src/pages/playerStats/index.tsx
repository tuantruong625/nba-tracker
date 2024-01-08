import { displayLogo } from '../../utils';

interface PlayerStatsType {
	showPlayerStats: boolean;
	setShowPlayerStats: any;
	selectedPlayer: any;
}

const PlayerStats = ({
	showPlayerStats,
	setShowPlayerStats,
	selectedPlayer,
}: PlayerStatsType) => {
	console.log(selectedPlayer, 'selectedPlayer');
	return (
		<div
			className="relative z-10"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
		>
			<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
					<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
						<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-80">
							<div className="flex flex-col">
								<div className="flex items-center justify-between">
									<div className='flex items-center'>
										<img
											src={displayLogo(selectedPlayer.team.name)}
											alt={`${selectedPlayer.team.name} logo`}
											className="w-16"
										/>
										<h3
											className="text-base font-semibold leading-6 text-gray-900"
											id="modal-title"
										>
											{selectedPlayer.player.first_name}{' '}
											{selectedPlayer.player.last_name}
										</h3>
									</div>
										
									<button
										type="button"
										className=""
										onClick={() => setShowPlayerStats(!showPlayerStats)}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6 hover:bg-gray-50 text-gray-500"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
											/>
										</svg>
									</button>
								
								</div>
								<div className="flex px-4 py-2">
									<div className="">
										<p className="text-gray-500">{selectedPlayer.pts} points</p>
										<p className="text-gray-500">
											{selectedPlayer.reb} rebounds
										</p>
										<p className="text-gray-500">
											{selectedPlayer.ast} assists
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayerStats;
